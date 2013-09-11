class User < ActiveRecord::Base
    has_many :tweets

    def tweet(status)
      tweet = tweets.create!(:tweet => status)
      TweetWorker.perform_async(tweet.id)
    end

    def tweet_later(status, number)
      tweet = tweets.create!(:tweet => status)
      TweetWorker.perform_in(number.minutes, tweet.id)
    end

end



