import { LocalStorage } from "quasar";
import { baseClass, mongoObjectId } from "./def";

export function saveDataStore({ state }) {
    LocalStorage.set('vuex-store-data', state);
}

export function dataLogout({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
        commit('wipeStore');
        dispatch('saveDataStore');
        resolve();
    });
}

export function addClass({ commit, state }, { name }) {
    return new Promise((resolve, reject) => {
        // check is there is a class with the same name
        if (Object.values(state.classes).filter(c => c.name === name).length > 0) {
            reject('You may not have a class with the same name');
            return;
        }
        // create our new class object
        const newClass = baseClass();
        newClass.name = name;
        commit('setClass', [newClass, newClass]);
        resolve();
    });
}

export function addCategory({ commit }, [{ classid }, categoryObj]) {
    return new Promise((resolve, reject) => {
        if (!('id' in categoryObj)) {
            categoryObj.id = mongoObjectId();
        }
        commit('setCategory', [{ classid }, categoryObj, categoryObj]);
        resolve(categoryObj.id);
    });
}

export function modifyCategory({ commit, dispatch, getters }, [{ classid, id }, categoryObj]) {
    return new Promise((resolve, reject) => {
        commit('setCategory', [{ classid }, { id }, categoryObj]);
        dispatch('smartUploadDataStore');
        resolve();
    });
}

export function setGrade({ commit, dispatch }, [{ classid, id }, gradeObj]) {
    return new Promise((resolve, reject) => {
        commit('setGrade', [{ classid }, { id }, gradeObj]);
        dispatch('smartUploadDataStore');
        resolve();
    });
}

export function setClassName({ commit, dispatch }, [{ classid }, { name }]) {
    return new Promise((resolve, reject) => {
        commit('setClassName', [{ classid }, { name }]);
        dispatch('smartUploadDataStore');
        resolve();
    });
}

export function deleteGrade({ commit, dispatch }, [{ classid }, { id }]) {
    return new Promise((resolve, reject) => {
        commit('deleteGrade', [{ classid }, { id }]);
        dispatch('smartUploadDataStore');
    });
}

/**
 * THIS WILL DELETE ASSOCIATED GRADES
 * @param state
 * @param commit
 * @param classid
 * @param id
 * @returns {Promise<any>}
 */
export function deleteCategory({ state, commit, dispatch }, [{ classid }, { id }]) {
    return new Promise((resolve, reject) => {
        if (classid in state.classes) {
            Object.values(state.classes[classid].grades).filter(grade => grade.categoryId === id).forEach((grade) => {
                commit('deleteGrade', [{ classid }, { id: grade.id }]);
            });
            commit('deleteCategory', [{ classid }, { id }]);
            dispatch('smartUploadDataStore');
            resolve();
        } else {
            reject();
        }
    });
}
