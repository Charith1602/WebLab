# Feature Engineering Documentation

## 1. Critical Authority Index

Formula:
Critical Authority Index = (Total_Reviews / max(Total_Reviews)) × (avg_review_length / max(avg_review_length))

Parameters:
- Total_Reviews: The total number of reviews written by a user
- max(Total_Reviews): The maximum number of reviews written by any user in the dataset
- avg_review_length: The average length of the user's reviews, measured in characters or words
- max(avg_review_length): The maximum average review length among all users in the dataset

## 2. Title-Text Relevance

Formula:
Title-Text Relevance = cosine_similarity(Review_Title_embedding, Review_Text_embedding)

Parameters:
- Review_Title_embedding: A vector representation of the review title, generated using techniques like TF-IDF or word embeddings
- Review_Text_embedding: A vector representation of the review text, generated using similar techniques as above

## 3. Genre Specialization Coefficient

Formula:
Genre Specialization = max(genre_pct_{genre}) / (1 - Entropy(genre_distribution))

Parameters:
- max(genre_pct_{genre}): The maximum percentage of reviews a user has written for any single genre
- Entropy(genre_distribution): A measure of diversity in the genres reviewed by the user, calculated using:
  Entropy = -sum(genre_pct_{genre} × log(genre_pct_{genre} + ε))
  where ε is a small constant to avoid logarithm of zero

## 4. Social Media Influencer Probability

Formula:
Influencer Score = (extreme_rating_pct × 0.4) + (avg_review_length/max_length × 0.3) + (Review_Title_exclamation_count × 0.3)

Parameters:
- extreme_rating_pct: The percentage of ratings that are considered extreme (1-2 or 9-10)
- avg_review_length: The average length of the user's reviews
- max_length: The maximum review length across all users
- Review_Title_exclamation_count: The count of exclamation marks in the review title

## 5. Genre Rating Polarization

Formula:
Genre Polarization = max(genre_rating_delta_{genre}) - min(genre_rating_delta_{genre})

Parameters:
- max(genre_rating_delta_{genre}): The maximum difference between the user's average rating for a specific genre and the global average rating for that genre
- min(genre_rating_delta_{genre}): The minimum difference between the user's average rating for a specific genre and the global average rating for that genre 
