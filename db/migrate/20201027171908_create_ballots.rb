class CreateBallots < ActiveRecord::Migration[6.0]
  def change
    create_table :ballots do |t|
      t.string :candidate
      t.string :year
      t.boolean :is_submitted
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
