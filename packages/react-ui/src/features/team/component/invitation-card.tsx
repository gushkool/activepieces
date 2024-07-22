import { AvatarFallback } from '@radix-ui/react-avatar';
import { Trash } from 'lucide-react';

import { UserInvitation } from '@activepieces/shared';

import { ConfirmationDeleteDialog } from '../../../components/delete-dialog';
import { Avatar, AvatarImage } from '../../../components/ui/avatar';
import { Button } from '../../../components/ui/button';
import { userInvitationApi } from '../lib/user-invitation';

export function InvitationCard({ invitation }: { invitation: UserInvitation }) {
  return (
    <div
      className="flex items-center justify-between space-x-4"
      key={invitation.id}
    >
      <div className="flex items-center space-x-4">
        <Avatar className="hidden size-9 sm:flex">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback className="justify-center items-center flex">
            <span className="p-2">
              {invitation.email.charAt(0).toLocaleUpperCase()}
            </span>
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium leading-none">{invitation.email}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <ConfirmationDeleteDialog
          mutationFn={() => userInvitationApi.delete(invitation.id)}
          entityName={invitation.email}
          title={`Remove ${invitation.email}`}
          message="Are you sure you want to remove this invitation?"
        >
          <Button variant="ghost" className="size-8 p-0">
            <Trash className="bg-destructive-500 size-4" />
          </Button>
        </ConfirmationDeleteDialog>
      </div>
    </div>
  );
}
