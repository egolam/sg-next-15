import { Query } from "appwrite";
import { db } from "../utils/appwrite";

export async function getLocations() {
  const res = await db.listDocuments(
    process.env.APPWRITE_DBID,
    process.env.APPWRITE_COLLECTIONID,
    [Query.offset(), Query.limit(5)]
  );
  return res.documents;
}
