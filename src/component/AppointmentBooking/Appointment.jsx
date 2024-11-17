import PatientDetail from "./PatientDetail";
import AvailableTime from "./AvailableTime";
import BookAppointment from "./BookAppointment";
import Issue from "./Issue";

export default function Appointment() {
  return (
    <div className="flex h-[566px] p-[40px] justify-between items-start text-black">
      <PatientDetail />
      <AvailableTime />
      <Issue />
      <BookAppointment />
    </div>
  );
}
