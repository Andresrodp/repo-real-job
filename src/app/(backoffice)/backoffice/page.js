import "./backoffice.css";
import {fetchSubmissions} from "@/utils/fetchSubmissions";

export const revalidate = 5;

export default async function Backoffice() {
  const submissions = await fetchSubmissions();

  return (
      <div className="w-full p-10">
        <h1 className="text-2xl pb-10">Administración: Registros</h1>
        <table border="1" className="w-full">
          <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Número de Documento</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Ciudad</th>
            <th>Dirección</th>
            <th>Origen</th>
            <th>Curso</th>
            <th>Fecha de Creación</th>
          </tr>
          </thead>
          <tbody>
          {
            submissions.map((submission, index) => (
                <tr key={submission.id}>
                  <td>{index + 1}</td>
                  <td>{submission.name}</td>
                  <td>{submission.document_number}</td>
                  <td>{submission.phone}</td>
                  <td>{submission.email?.toLowerCase()}</td>
                  <td>{submission.city?.toUpperCase()}</td>
                  <td>{submission.street}</td>
                  <td>{submission.origin_submission === 'cooking_lessons' ? 'CLASES DE COCINA' : 'GOLDEN TICKET'}</td>
                  <td>{submission.course_code}</td>
                  <td>{ new Date(submission.created_at).toLocaleString() }</td>
                </tr>
            ))
          }
          </tbody>
        </table>
      </div>
  )
}
