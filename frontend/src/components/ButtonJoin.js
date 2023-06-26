import React from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { userAtom } from "../atom";
import { useParams } from "react-router-dom";

const ButtonJoin = ({ eventId }) => {
    const [, setUser] = useAtom(userAtom);

    const handleJoin = () => {
        const token = localStorage.getItem("token");

        const participationData = {
            user_id: localStorage.getItem("id"),
        };

        axios
            .post(
                `http://localhost:4000/events/${eventId}/participations`,
                participationData,
                {
                    headers: {
                        Authorization: token ? token : "",
                    },
                }
            )
            .then((response) => {
                console.log(response.data);
                // Mettre à jour l'état de l'utilisateur ou effectuer toute autre action nécessaire
            })
            .catch((error) => {
                console.error(error);
                // Gérer l'erreur ou afficher un message d'erreur à l'utilisateur
            });
    };

    return <button onClick={handleJoin}>Participer</button>;
};

export default ButtonJoin;