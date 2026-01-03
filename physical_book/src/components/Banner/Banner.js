import React from 'react';
import clsx from 'clsx';
import styles from './Banner.module.css';

const Banner = ({title, description, type = 'info', actionText, actionLink}) => {
  const bannerClasses = clsx(
    styles.banner,
    styles[`banner--${type}`],
  );

  return (
    <div className={bannerClasses}>
      <div className="container">
        <div className={styles.bannerContent}>
          <div className={styles.bannerText}>
            {title && <h3 className={styles.bannerTitle}>{title}</h3>}
            {description && <p className={styles.bannerDescription}>{description}</p>}
          </div>
          {actionText && actionLink && (
            <div className={styles.bannerAction}>
              <a href={actionLink} className={`button button--${type === 'info' ? 'primary' : type}`}>
                {actionText}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;