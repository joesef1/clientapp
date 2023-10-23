import React, { useState, useEffect , useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import '../index.css';
import { yupResolver } from '@hookform/resolvers/yup'; // Ensure you have this import
// import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { insertRecord } from '../store/recordSlice';


const CreatePage = () => {

  // const dispatch = useDispatch();
  // const records = useSelector((state) => state.record.records);




  const notify = () =>
  toast.info('Form submitted successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      background: "#3B71CA", // Set the background color to #3B71CA
      color: "white",
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Step 1: Set up state to store the form data
  const [formData, setFormData] = useState({
    PatientName: '',
    Symptoms: '',
    Diagnosis: '',
    TreatmentPlan: '',
  });

    // Step 2: Event handler to update the state for each input
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
  

  const schema = yup.object().shape({
    PatientName: yup.string().required('Patient Name is required'),
    Symptoms: yup.string().required('Symptoms are required'),
    Diagnosis: yup.string().required('Diagnosis is required'),
    TreatmentPlan: yup.string().required('Treatment Plan is required'),
  });
  



  const { control, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  
  const patientNameRef = useRef();
  const symptomsRef = useRef();
  const diagnosisRef = useRef();
  const treatmentPlanRef = useRef();
  

  // const onSubmit = (data) => {
  //   console.log(data);

  //   setValue('PatientName', '');
  //   setValue('Symptoms', '');
  //   setValue('Diagnosis', '');
  //   setValue('TreatmentPlan', '');

  //   notify()
  // };

  const onSubmit = (data) => {
    // data.date = new Date().toISOString();
  
    // const formattedData = {
    //   patientName: data.PatientName,
    //   symptoms: data.Symptoms,
    //   diagnosis: data.Diagnosis,
    //   treatmentPlan: data.TreatmentPlan,
    //   date: new Date().toISOString(),
    // };
    // console.log(formattedData);

    // setValue('PatientName', '');
    // setValue('Symptoms', '');
    // setValue('Diagnosis', '');
    // setValue('TreatmentPlan', '');

    

    // dispatch(insertRecord(formattedData))
    //   .unwrap()
    //   .then(() => {
    //     // Handle successful submission, e.g., show a success message
    //     console.log('Data sent successfully');
    //     // reset(); // Clear the form
    //     notify();
    //  console.log(data);

    //   })
    //   .catch((error) => {
    //     // Handle submission error, e.g., show an error message
    //     console.error('Failed to send data', error);
    //   });
  };


  return (
    <div className="container mx-auto p-4 mt-16 bg-white">
      <ToastContainer />
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12 border border-slate-200 rounded-xl p-10">
        <h1 className="text-lg text-center font-bold text-blue-500">Clinic</h1>
        <form className="flex flex-col mt-7"
         onSubmit={handleSubmit(onSubmit)}
         >
  <Controller
    name="PatientName"
    control={control}
    render={({ field }) => (
      <input
      ref={patientNameRef}
        type="text"
        {...field}
        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-sm"
        placeholder="Patient Name"
      />
    )}
  />
  {errors.PatientName && <p className="text-red-500">{errors.PatientName.message}</p>}

  <Controller
    name="Symptoms"
    control={control}
    render={({ field }) => (
      <input
      ref={symptomsRef}
        type="text"
        {...field}
        className="px-4 py-3 mt-7 w-full rounded-md bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-sm"
        placeholder="Symptoms"
      />
    )}
  />
  {errors.Symptoms && <p className="text-red-500">{errors.Symptoms.message}</p>}

  <Controller
    name="Diagnosis"
    control={control}
    render={({ field }) => (
      <input
      ref={diagnosisRef}
        type="text"
        {...field}
        className="px-4 py-3 mt-7 w-full rounded-md bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-sm"
        placeholder="Diagnosis"
      />
    )}
  />
  {errors.Diagnosis && <p className="text-red-500">{errors.Diagnosis.message}</p>}

  <Controller
  ref={treatmentPlanRef}
    name="TreatmentPlan"
    control={control}
    render={({ field }) => (
      <textarea
        {...field}
        className="text-gray-500 px-4 py-3 mt-7 w-full rounded-md bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 text-sm"
        placeholder="Treatment Plan"
      />
    )}
  />
  {errors.TreatmentPlan && <p className="text-red-500">{errors.TreatmentPlan.message}</p>}

  <button
    type="submit"
    style={{ backgroundColor: '#3B71CA', color: 'white', borderRadius: '5px' }}
    className="mt-7 px-4 py-3 leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none bg-blue-500"
  >
    Submit
  </button>
</form>

      </div>
    </div>
  );
};

export default CreatePage;



