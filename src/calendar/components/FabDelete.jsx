import { useCalendarStore, useUiStore } from "../../hooks";

export const FabDelete = () => {
  const { StartdeletingEvent } = useCalendarStore();

  const handleDelete = () => {
    StartdeletingEvent();
  };

  return (
    <button className="btn btn-danger fab-danger" onClick={handleDelete}>
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
