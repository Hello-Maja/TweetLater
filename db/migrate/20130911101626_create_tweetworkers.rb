class CreateTweetworkers < ActiveRecord::Migration
  def change
    create_table :tweetworkers do |t|
      t.timestamps
    end 
  end
end
