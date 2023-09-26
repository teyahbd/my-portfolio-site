import axios from "axios";

const airtable = axios.create({
  baseURL: "https://api.airtable.com/v0",
  headers: { Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_PAT}` },
});
// timeout

const airtableBaseId = import.meta.env.VITE_AIRTABLE_BASE_ID;

const projectTableId = import.meta.env.VITE_PROJECT_TABLE_ID;

const descTableId = import.meta.env.VITE_DESC_TABLE_ID;

export const fetchProjects = async () => {
  const response = await airtable.get(`/${airtableBaseId}/${projectTableId}`);

  return response.data.records;
};

// generalise this later to getDescription
export const fetchIntro = async () => {
  const response = await airtable.get(
    `/${airtableBaseId}/${descTableId}/recNfsXgkF0oTxqfg`,
  );

  return response.data;
};
