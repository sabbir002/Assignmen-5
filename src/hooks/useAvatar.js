import { useProfile } from "./useProfile";

export const useAvatar = (user) => {
  const { state } = useProfile();
  const isCurrentUser = user?.id === state?.user?.id;
  const avatar = isCurrentUser ? `${state?.user?.avatar}` : `${user?.avatar}`;
  const avatarURL = `${
    import.meta.env.VITE_SERVER_URL
  }/uploads/avatar/${avatar}`;

  return { avatarURL };
};
