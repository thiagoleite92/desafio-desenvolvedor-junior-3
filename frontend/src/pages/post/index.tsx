import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import {
  ArrowLeft,
  FacebookIcon,
  InstagramIcon,
  SendIcon,
  TwitterIcon,
} from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';

import withAuthentication from '../../routes/auth';
import PostsService from '../../service/PostsService';
import { PostResponseType } from '../../service/types/postResponse.type';
import Button from '../../components/Button';

import styles from './styles.module.scss';

function Post() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const postService = useMemo(() => new PostsService(), []);

  const [postDetails, setPostDetails] = useState<PostResponseType | null>(null);

  const fetchPostDetails = useCallback(
    async (postId: string) => {
      try {
        setPostDetails(
          await postService.fetchPostDetails<PostResponseType>(postId)
        );
      } catch (error) {
        console.log(error);
      }
    },
    [postService]
  );

  const handleReturn = () => {
    navigate('/');
  };

  useEffect(() => {
    if (!postId) {
      return;
    }

    fetchPostDetails(postId);
  }, [fetchPostDetails, postId]);

  return (
    <section className={styles.postSection}>
      <div className={styles.detailsContainer}>
        <div className={styles.infoContainer}>
          <h3>Autor: {postDetails?.User?.name}</h3>

          <span>
            Data da postagem:{' '}
            {moment(postDetails?.createdAt).format('DD/MM/yyyy')}
          </span>
          {postDetails?.updatedAt !== postDetails?.createdAt && (
            <span>
              Atualizado em:{' '}
              {moment(postDetails?.updatedAt).format('DD/MM/yyyy - HH:mm')}h
            </span>
          )}
        </div>
        <div className={styles.actionsContainer}>
          <Button text="Voltar" onClick={handleReturn}>
            {' '}
            <ArrowLeft />
          </Button>
          <div className={styles.shareContainer}>
            <FacebookIcon className={`${styles.face} ${styles.btnGeneric}`} />
            <InstagramIcon
              className={`${styles.insta}  ${styles.btnGeneric}`}
            />
            <TwitterIcon className={`${styles.twitter} ${styles.btnGeneric}`} />
            <BsWhatsapp className={`${styles.zap} ${styles.btnGeneric}`} />
          </div>
        </div>
      </div>
      <div className={styles.text}>
        <strong>Título: {postDetails?.title}</strong>
        <p>{postDetails?.text}</p>
      </div>
    </section>
  );
}

const AuthenticatedComponent = withAuthentication(Post);

export default AuthenticatedComponent;
