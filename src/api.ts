import axios from "axios";

const airtable = axios.create({
  baseURL: "https://api.airtable.com/v0",
  headers: { Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_PAT}` },
  timeout: 5000,
});

const airtableBaseId = import.meta.env.VITE_AIRTABLE_BASE_ID;

const projectTableId = import.meta.env.VITE_PROJECT_TABLE_ID;

const descTableId = import.meta.env.VITE_DESC_TABLE_ID;

const infoTableId = import.meta.env.VITE_INFO_TABLE_ID;

export const fetchProjects = async () => {
  const response = await airtable.get(`/${airtableBaseId}/${projectTableId}`);

  return response.data.records;
};

export const fetchDescription = async (recordId: string | undefined) => {
  if (!recordId) return new Error("Please provide record id");

  const response = await airtable.get(
    `/${airtableBaseId}/${descTableId}/${recordId}`,
  );

  return response.data;
};

export const fetchInfo = async () => {
  const response = await airtable.get(`/${airtableBaseId}/${infoTableId}`);

  return response.data.records;
};
