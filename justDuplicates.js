import React from "react";
import Freshers from "./utils";

const ShowDuplicate = () => {
  const groupedById = Freshers.reduce((group, item) => {
    group[item.id] = group[item.id] || [];
    group[item.id].push(item);
    return group;
  }, {});

  const duplicateGroups = Object.values(groupedById).filter(
    (group) => group.length > 1
  );

  const duplicateObj = duplicateGroups.flat();

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {duplicateObj.map(({ id, name, joining_date }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{joining_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ShowDuplicate;
