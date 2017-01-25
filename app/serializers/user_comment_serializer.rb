class UserCommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :author
end
