# Cinereco
https://app.mymoviesreco.com/

Get movie recommendations based on others liking similar movies. </br>
Coded as a way to get through the confinement by both occupying my days coding it and allowing my roommates and I to find new movies to watch at night.

## Behind the scene 
API & ML model still private as the code still needs some work. </br>
Based on the ml-25m dataset (https://grouplens.org/datasets/movielens/25m/) </br>
Movies are selected based on cosine similarity, with movie vectors determined using Keras auto-encoding layer.
