class CreateCandidates < ActiveRecord::Migration[6.0]
  def change
    create_table :candidates do |t|
      t.string :first_name
      t.string :last_name
      t.string :party
      t.string :policy
      t.string :age
      t.integer :vote_total
      t.string :image_url
      t.belongs_to :ballot, null: false, foreign_key: true

      t.timestamps
    end
  end
end
