import React from 'react';
import GroupList from "./groupList";

const Sidebar = ({professions, selectedProf, handleProfessionsSelect, clearFilter}) => {
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3">
                <GroupList
                    selectedItem={selectedProf}
                    items={professions}
                    onItemsSelect={handleProfessionsSelect}
                />
                <button
                    className="btn btn-secondary mt-2"
                    onClick={clearFilter}
                >
                    Очистить
                </button>
            </div>
        </>
    );
};

export default Sidebar;