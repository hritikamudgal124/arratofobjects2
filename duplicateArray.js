import React from "react";
import  Freshers  from "./utils";

const DuplicateList = () => {
  // const uniqueIds = [...new Set(Freshers.map((item) => item.id))];
  const uniqueIds = Freshers.map((item)=>item.id).filter()
  const uniqueData = uniqueIds.map((id) =>
  Freshers.find((item) => item.id === id)
  );
  return (
        <>
        <table>
          <tbody>
            {uniqueData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.joining_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </>
      );
};
export default DuplicateList