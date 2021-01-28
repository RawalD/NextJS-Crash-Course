import ArticleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'
const Article = ({articles}) => {
    return (
        <div className={ArticleStyles.grid}>
            {articles.map((article) =>
             <ArticleItem article={article} />
             )}
        </div>
    )
}

export default Article
