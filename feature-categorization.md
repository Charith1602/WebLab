# Feature Categorization and Persona Mapping

## 1. Rating Behavior Features

### Average Rating Tendency
- **High** (7-10): Consistently rates films highly
- **Medium** (4-6): Generally rates films in the middle range
- **Low** (1-3): Consistently gives low ratings

### Rating Variance
- **High**: Large spread between highest and lowest ratings (>4 points)
- **Medium**: Moderate spread in ratings (2-4 points)
- **Low**: Small spread in ratings (<2 points)

### Rating-IMDB Deviation
- **High Positive**: Consistently rates >1.5 points above IMDB average
- **Medium Positive**: Rates 0.5-1.5 points above IMDB average
- **Neutral**: Rates within 0.5 points of IMDB average
- **Medium Negative**: Rates 0.5-1.5 points below IMDB average
- **High Negative**: Consistently rates >1.5 points below IMDB average

### Extreme Rating Tendency
- **High**: >40% of ratings are extreme (1-2 or 9-10)
- **Medium**: 20-40% of ratings are extreme
- **Low**: <20% of ratings are extreme

## 2. Review Content Features

### Review Length
- **High**: Typically >300 words
- **Medium**: Typically 100-300 words
- **Low**: Typically <100 words

### Sentence Complexity
- **High**: Average >20 words per sentence, complex structure
- **Medium**: Average 12-20 words per sentence
- **Low**: Average <12 words per sentence, simple structure

### Technical Language Density
- **High**: >10% of words are film-specific technical terms
- **Medium**: 5-10% technical terms
- **Low**: <5% technical terms

### Personal Pronoun Usage
- **High**: >5% of words are first-person pronouns
- **Medium**: 2-5% first-person pronouns
- **Low**: <2% first-person pronouns

### Sentiment Intensity
- **High Positive**: >70% positive sentiment words
- **Medium Positive**: 55-70% positive sentiment words
- **Balanced**: 45-55% positive sentiment words
- **Medium Negative**: 30-45% positive sentiment words
- **High Negative**: <30% positive sentiment words

## 3. Focus and Reference Features

### Actor/Character Focus
- **High**: >3 actor/character mentions per review
- **Medium**: 1-3 actor/character mentions
- **Low**: <1 actor/character mention on average

### Director/Crew Focus
- **High**: >2 director/crew mentions per review
- **Medium**: 1-2 director/crew mentions
- **Low**: <1 director/crew mention on average

### Plot Focus
- **High**: >50% of review discusses plot
- **Medium**: 25-50% of review discusses plot
- **Low**: <25% of review discusses plot

### Comparative References
- **High**: >2 references to other films per review
- **Medium**: 1-2 references to other films
- **Low**: <1 reference to other films on average

### Social Context References
- **High**: Frequent mentions of audience reactions, social impact
- **Medium**: Occasional mentions of audience/social context
- **Low**: Rarely mentions audience reaction or social context

## 4. Engagement Pattern Features

### Genre Diversity
- **High**: Reviews spread across >5 distinct genres
- **Medium**: Reviews concentrated in 3-5 genres
- **Low**: Reviews concentrated in 1-2 genres

### Review Frequency
- **High**: >1 review per week on average
- **Medium**: 1-4 reviews per month
- **Low**: <1 review per month

### Recent Release Focus
- **High**: >70% of reviews for films released within last 3 months
- **Medium**: 30-70% recent release reviews
- **Low**: <30% recent release reviews

### Franchise/Series Engagement
- **High**: >40% of reviews for franchise/series films
- **Medium**: 20-40% franchise/series reviews
- **Low**: <20% franchise/series reviews

## 5. Interaction Features

### Technical Appreciation × Emotional Response
- **Technical-Dominant**: High technical focus, low emotional content
- **Balanced Technical-Emotional**: Both technical and emotional elements
- **Emotion-Dominant**: Low technical focus, high emotional content

### Genre Specificity × Rating Variance
- **Genre Expert**: Low genre diversity, low rating variance within genre
- **Genre Explorer**: Medium genre diversity, high rating variance
- **Genre Agnostic**: High genre diversity, medium rating variance

### Plot Focus × Sentiment Alignment
- **Plot Critic**: High plot focus, negative sentiment
- **Plot Enthusiast**: High plot focus, positive sentiment
- **Non-Plot Focused**: Low plot focus (regardless of sentiment)

### Contrarian Index × Technical Language
- **Expert Contrarian**: High deviation from IMDB, high technical language
- **Casual Contrarian**: High deviation from IMDB, low technical language
- **Technical Conformist**: Low deviation from IMDB, high technical language
- **Mainstream Viewer**: Low deviation from IMDB, low technical language

### Engagement Frequency × Review Depth
- **Dedicated Analyst**: High frequency, high complexity/length
- **Casual Contributor**: Low frequency, low complexity/length
- **Occasional Deep Diver**: Low frequency, high complexity/length
- **Frequent Skimmer**: High frequency, low complexity/length
