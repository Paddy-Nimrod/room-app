import RoomDetails from "../../components/room/RoomDetails";
import Layout from "../../components/layout/Layout";

import { getRoomDetails } from "../../redux/actions/roomActions";
import { wrapper } from "../../redux/store";

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function RoomDetailsPage(props) {
  return (
    <Layout>
      <RoomDetails title="Room Details" />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      await store.dispatch(getRoomDetails(req, params.id));
    }
);
