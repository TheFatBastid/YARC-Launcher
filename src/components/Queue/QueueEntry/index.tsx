import stylesNormal from "./QueueEntry.module.css";
import stylesBanner from "./QueueEntryBanner.module.css";

interface Props {
    icon?: React.ReactNode;
    name?: string;
    releaseName?: string;
    tag?: string;
    bannerMode: boolean;
}

const QueueEntry: React.FC<Props> = ({ icon, name, releaseName, tag, bannerMode }: Props) => {
    // Choose the right style
    let styles = stylesNormal;
    if (bannerMode) {
        styles = stylesBanner;
    }

    return <div className={styles.item}>
        <div className={styles.main}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.info}>
                <span className={styles.infoHeader}>
                    {name}
                    {tag !== undefined &&
                        <span className={styles.tag}>
                            &#32;({tag})
                        </span>
                    }
                </span>
                {releaseName}
            </div>
        </div>
        <div className={styles.extra}>
        </div>
    </div>;
};

export default QueueEntry;
